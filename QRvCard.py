import qrcode
from PIL import Image
import base64
import io


firstName="Joanne"
middleName="Uyen"
lastName="Thieu"
email="joanne_thieu@gmail.com"
tel="+1-403-403-0482"
adr_street1="3819 Boulder Canyon Dr"
adr_street2="Apt 1"
adr_city="Castro Valley"
adr_state="CA"
adr_postal="94552"
adr_country="United States"
DOB="19891025"


contents = f"""
BEGIN:VCARD
VERSION:4.0
N:{lastName};{firstName};{middleName}
FN:Displayname
URL:
EMAIL:{email}
TEL;TYPE=voice,phone,pref:{tel}
ADR;TYPE=intl,home,postal,parcel:;;{adr_street1};{adr_city};{adr_state};{adr_postal};{adr_country}
BDAY:{DOB}
END:VCARD
"""

contents = contents.replace(":", "%3A")
contents = contents.replace(";", "%3B")
contents = contents.replace(" ", "%20")
contents = contents.replace("@", "%40")
contents = contents.replace("/", "%2F")
contents = contents.replace("\n", "%0A")


QR_URL = "https://quickchart.io/qr?text=" + contents
print(QR_URL)

"""
img = qrcode.make(contents)
type(img)  # qrcode.image.pil.PilImage
img.save("some_file.png")
"""





# generate hash from password
from werkzeug.security import check_password_hash, generate_password_hash
pw = "crazies"
hash = generate_password_hash(pw,method='pbkdf2:sha1', salt_length=8)
print(hash)
# pbkdf2:sha1:600000$ZyGEFbx0$e7dc8399e61f6cae721ae4a25918b419d19ce1b5

# search query: google translate how to embed text to speech chinese
# How to use Google's Text-to-Speech service for Chinese characters on Android?
# https://stackoverflow.com/questions/28166813/how-to-use-googles-text-to-speech-service-for-chinese-characters-on-android

http://www.translate.google.com/translate_tts?ie=utf-8&tl=zh-cn&q

String text = "text to be spoken";
public static final String AUDIO_CHINESE= "http://www.translate.google.com/translate_tts?tl=zh&q=";
public static final String AUDIO_ENGLISH = "http://www.translate.google.com/translate_tts?tl=en&q=";

URL url = new URL(AUDIO_ENGLISH + text);

urlConnection = (HttpURLConnection) url.openConnection();
urlConnection.setRequestMethod("GET");
urlConnection.setRequestProperty("Accept-Charset", Variables.UTF_8);

if (urlConnection.getResponseCode() ==200) {
     //get byte array in response
     in = new DataInputStream(urlConnection.getInputStream());
} else {
     in = new DataInputStream(urlConnection.getErrorStream());
}
//use commons io
byte[] bytes = IOUtils.toByteArray(in);

in.close();
urlConnection.disconnect();

return bytes;


String chText = "你好";
URL url = new URL(AUDIO_CHINESE + URLEncoder.encode(chText, "UTF-8));
and

URL url = new URL(AUDIO_CHINESE + Uri.encode(chText, "UTF-8"));
and then adding

urlConnection.setRequestProperty("content-type", "application/x-www-form-urlencoded; charset=UTF-8");

http://www.translate.google.com/translate_tts?ie=utf-8&tl=zh-cn&q=
URLEncoder.encode("你好嗎", "UTF-8")

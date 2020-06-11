package systemlanguage;

import java.util.Locale;

public class SystemLanguage {

  public static void main(String[] args) {
    Locale currentLocale = Locale.getDefault();

    System.out.println("Your current language is " + currentLocale.getDisplayLanguage().toLowerCase() + ".");
  }

}

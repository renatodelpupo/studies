package fundamentals;

public class FahrenheitToCelsius {

	public static void main(String[] args) {
		System.out.println(celsiusTemperature(68));
	}

	static String celsiusTemperature(double fahrenheitTemperature) {
		final int fahrenheitAdjust = 32;
		final double multiplier = 5.0/9.0;

		double calc = (fahrenheitTemperature - fahrenheitAdjust) * multiplier;
		return  calc + "˚C";
	}

}

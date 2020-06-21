package fundamentals;

public class Wrappers {

	public static void main(String[] args) {

		Byte appByte = 10;
		System.out.println(appByte.getClass());

		Short appShort = 100;
		System.out.println(appShort.getClass());

		Integer appInt = 10000;
		System.out.println(appInt.getClass());

		Long appLong = 1_000_000L;
		System.out.println(appLong.getClass());

		Float appFloat = 10.10F;
		System.out.println(appFloat.getClass());

		Double appDouble = 1000D;
		System.out.println(appDouble.getClass());

		Character appChar = 'R';
		System.out.println(appChar.getClass());

		Boolean appBoolean = true;
		System.out.println(appBoolean.getClass());
	}

}

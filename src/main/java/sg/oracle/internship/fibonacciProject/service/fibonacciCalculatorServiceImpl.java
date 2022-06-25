package sg.oracle.internship.fibonacciProject.service;

import java.math.BigInteger;
import jakarta.inject.Singleton;

@Singleton
public class fibonacciCalculatorServiceImpl implements fibonacciCalculatorService {

	@Override
	public BigInteger[] fibonacciSequence(int number) {

		BigInteger[] fibanacci = new BigInteger[number];
		if (number == 1) {
			fibanacci[0] = BigInteger.ZERO;
		}

		if (number == 2) {
			fibanacci[0] = BigInteger.ZERO;
			fibanacci[1] = BigInteger.ONE;
		}

		if (number > 2) {
			fibanacci[0] = BigInteger.ZERO;
			fibanacci[1] = BigInteger.ONE;
			for (int i = 2; i < number; i++) {
				fibanacci[i] = fibanacci[i - 1].add(fibanacci[i - 2]);
			}
		}
		return fibanacci;
	}

	@Override
	public BigInteger[] sortfibonacciSequence(BigInteger[] fibanacci) {

		if (fibanacci.length == 1 || fibanacci.length == 2) {
			return fibanacci;
		}

		BigInteger[] sortedFibanacci = new BigInteger[fibanacci.length];

		int index = 0;

		for (int i = fibanacci.length - 1; i >= 0; i--) {
			if (fibanacci[i].mod(BigInteger.TWO) == BigInteger.ZERO) {
				sortedFibanacci[index] = fibanacci[i];
				index++;
			}
		}

		for (int i = fibanacci.length - 1; i >= 0; i--) {
			if (fibanacci[i].mod(BigInteger.TWO) != BigInteger.ZERO) {
				sortedFibanacci[index] = fibanacci[i];
				index++;
			}
		}
		return sortedFibanacci;
	}
}

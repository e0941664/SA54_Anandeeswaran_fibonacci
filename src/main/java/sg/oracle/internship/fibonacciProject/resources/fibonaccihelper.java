package sg.oracle.internship.fibonacciProject.resources;

import java.math.BigInteger;

public class fibonaccihelper {

	private BigInteger[] fibonacci;
	private BigInteger[] sorted;

	public fibonaccihelper() {
	};

	public fibonaccihelper(BigInteger[] fibonacci, BigInteger[] sortedfibonacci) {
		this.fibonacci = fibonacci;
		this.sorted = sortedfibonacci;
	}

	public BigInteger[] getFibonacci() {
		return fibonacci;
	}

	public void setFibonacci(BigInteger[] fibonacci) {
		this.fibonacci = fibonacci;
	}

	public BigInteger[] getSorted() {
		return sorted;
	}

	public void setSorted(BigInteger[] sorted) {
		this.sorted = sorted;
	}
}

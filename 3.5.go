package main

import (
	"fmt"
	"math"
)

func main() {
	var x float64
	fmt.Printf("Введите X\n")
	fmt.Scan(&x)
	if x <= 2 {
		fx := math.Pow(x, 2) + 4*x + 5
		fmt.Printf("F(x) = %.2f", fx)
	} else {
		fx := 1 / (math.Pow(x, 2) + 4*x + 5)
		fmt.Printf("F(x) = %.2f", fx)
	}

}

package main

import (
	"fmt"
	"math"
)

func main() {
	var y float64
	fmt.Println("Введите Y")
	fmt.Scan(&y)
	for x := -1.7; x <= 1.7; x += 0.2 {
		a := (1 + x) * ((x + y) / (math.Pow(x, 2) + 4))
		fmt.Printf("\n x = %.1f, a = %.3f", x, a)
	}
}

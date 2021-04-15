package main

import (
	"fmt"
	"math"
)

func main() {
	min := 100.0
	fmt.Printf("\n \t||============================||")
	fmt.Printf("\n \t||      x      ||      y      ||")
	fmt.Printf("\n \t||============================||")
	for x := -3.7; x <= 3.7; x += 0.2 {
		y := math.Sin(x)*math.Sin(x) + (math.Sin(x+math.Cos(x)))/5.1
		if y < min {
			min = y
		}
		fmt.Printf("\n \t||    %4.1f    ||    %6.2f    ||", x, y)
	}
	fmt.Printf("\n \t||============================||")
	fmt.Printf("\n\n Наименьшее значение Y: %.2f", min)
}

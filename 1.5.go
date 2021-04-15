package main

import (
	"fmt"
)

func main() {
	var x, y float64
	fmt.Println("Введите координаты точки X, Y")
	fmt.Scan(&x, &y)
	if x <= -2 && y >= 2 {
		fmt.Print("Точка принадлежит заштрихованной области\n")
	} else if x >= 2 && y <= -2 {
		fmt.Print("Точка принадлежит заштрихованной области\n")
	} else {
		fmt.Print("Точка не принадлежит заштрихованной области\n")
	}
}

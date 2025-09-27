package main

import (
	"fmt"
	"linkatch/internal/service/category/action"
	"linkatch/internal/service/category/payload"
)

func main() {
	qwe := payload.CreateCategory{
		Name: "test",
	}

	fmt.Println(action.Create(qwe))
}

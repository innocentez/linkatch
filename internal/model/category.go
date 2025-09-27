package model

type Category struct {
	Id             int     `json:"id"`
	ParentCategory *int    `json:"parentCategory"`
	Name           string  `json:"name"`
	Icon           *string `json:"icon"`
}

package payload

type CreateCategory struct {
	ParentCategory *int    `json:"parentCategory"`
	Name           string  `json:"name"`
	Icon           *string `json:"icon"`
}

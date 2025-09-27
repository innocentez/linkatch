package action

import (
	"fmt"
	"linkatch/internal/database"
	"linkatch/internal/model"
)

func GetAll() []model.Category {
	db := database.Connect()
	defer db.Close()

	rows, err := db.Query(`SELECT id, parent_id, name, icon FROM categories`)
	if err != nil {
		fmt.Println("db.Query GetCategories:", err)
		return nil
	}
	defer rows.Close()

	var categories []model.Category
	for rows.Next() {
		var c model.Category
		if err := rows.Scan(
			&c.Id,
			&c.ParentCategory,
			&c.Name,
			&c.Icon,
		); err != nil {
			fmt.Println("rows.Scan:", err)
			continue
		}

		categories = append(categories, c)
	}
	return categories
}

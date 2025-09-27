package action

import (
	"linkatch/internal/database"
	"linkatch/internal/model"
	"linkatch/internal/service/category/payload"
)

func Create(payload payload.CreateCategory) model.Category {
	dbConn := database.Connect()
	defer dbConn.Close()

	result, err := dbConn.Exec(`
		INSERT INTO categories (parent_id, name, icon)
		values ($1, $2, $3)
	`, payload.ParentCategory, payload.Name, payload.Icon)
	if err != nil {
		panic(err)
	}
	defer dbConn.Close()

	categoryId, _ := result.LastInsertId()

	row, err := dbConn.Query(`
		SELECT * FROM categories WHERE id = $1
	`, categoryId)
	if err != nil {
		panic(err)
	}

	var category model.Category
	for row.Next() {
		err = row.Scan(
			&category.Id,
			&category.ParentCategory,
			&category.Name,
			&category.Icon,
		)
		if err != nil {
			panic(err)
		}
	}
	defer row.Close()

	return category
}

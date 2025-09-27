package category

import (
	"linkatch/internal/model"
	"linkatch/internal/service/category/action"
	"linkatch/internal/service/category/payload"
)

type CategoryService struct{}

func NewCategoryService() *CategoryService {
	return &CategoryService{}
}

func (*CategoryService) GetCategories() []model.Category {
	return action.GetAll()
}

func (*CategoryService) CreateCategory(payload payload.CreateCategory) model.Category {
	return action.Create(payload)
}

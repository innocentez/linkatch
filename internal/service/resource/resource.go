package resource

import (
	"linkatch/internal/model"
	"linkatch/internal/service/resource/action"
	"linkatch/internal/service/resource/dto"
	"linkatch/internal/service/resource/payload"
)

type Service struct{}

func NewResourceService() *Service {
	return &Service{}
}

func (*Service) GetResources() []model.Resource {
	return action.GetAll()
}

func (*Service) CreateResource(payload payload.CreateResource) model.Resource {
	return action.Create(payload)
}

func (*Service) LoadResourceData(payload payload.LoadResourceData) dto.ResourceData {
	return action.LoadData(payload)
}

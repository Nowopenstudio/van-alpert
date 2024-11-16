export const myStructure = (S:any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
          .title('Featured')
          .child(S.document().schemaType('feature').documentId('feature').title('Featured')),
      S.listItem()
        .title('Projects')
        .child(S.documentTypeList('projects')),
      S.listItem()
        .title('By Category')
        .child(
          S.documentTypeList('categories')
          .title('Categories')
          .child(
            catId =>
              S.documentTypeList('projects')
                .title('Project')
                .filter('_type == "projects" && $catId == category._ref')
                .params({ catId })
            
          )
  
        ),
        S.divider(),
        S.listItem()
          .title('Info')
          .child(S.document().schemaType('info').documentId('info').title('Information')),

        ...S.documentTypeListItems().filter(listItem => !['projects','info', 'feature'].includes(listItem.getId())),


  
  
])
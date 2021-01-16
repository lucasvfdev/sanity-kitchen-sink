export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60032d4f71e7df7338c977c0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-x2u2z11y',
                  apiId: 'e22edf99-14fa-47e3-a28f-647fa2dce3a9'
                },
                {
                  buildHookId: '60032d4fab6d727d35aa727c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j6nnadej',
                  apiId: 'db73da50-6410-42ff-9be3-5903dd2af77d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lucasvfdev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j6nnadej.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

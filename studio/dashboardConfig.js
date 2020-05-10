export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5eb80cbe9b134912a4291fec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3ktcav9k',
                  apiId: '8b763087-3878-4c69-8eab-b077b713312e'
                },
                {
                  buildHookId: '5eb80cbf89c051ee7b347037',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sj7ogjdh',
                  apiId: '618908b1-64c3-42a8-842b-793a2f74e1ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/drdpedroso/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sj7ogjdh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

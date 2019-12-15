export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df607609be67d1f256e8e32',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cs4uezhv',
                  apiId: '5f4683bc-c19e-4a29-aa8e-080f4f94effc'
                },
                {
                  buildHookId: '5df60761805d47399c94ef03',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-urct9hu2',
                  apiId: 'af1c2d0b-fafb-49ae-ae4e-365b39927169'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ulampinoy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-urct9hu2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

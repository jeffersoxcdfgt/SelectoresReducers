import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppInMemoryApi  implements InMemoryDbService{
      createDb(){
        return {
          technology:[
            {
              id:1,
              name_technology:'Tech 1'
            },
            {
              id:2,
              name_technology:'Tech 2'
            },
            {
              id:3,
              name_technology:'Tech 3'
            }             
          ],
          jobs:[
            {
              id:1,
              name_job:'Job 1',
              id_technology:1
            },
            {
              id:2,
              name_job:'Job 2',
              id_technology:1
            },
            {
              id:3,
              name_job:'Job 3',
              id_technology:1
            },
            {
              id:4,
              name_job:'Job 4',
              id_technology:2
            }              
          ]
        }
    }
}
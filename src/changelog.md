task 1:
  - task 1.2 :white_check_mark:
  - task 1.3 :white_check_mark:
  - task 1.4 :white_check_mark:
  - task 1.5 :white_check_mark:
  - task 1.6 :white_check_mark:
  - task 1.7 :white_check_mark:
  - task 1.8 :white_check_mark:
  - task 1.9 :white_check_mark:
  - task 1.10 :white_check_mark:
  - task 1.11 :white_check_mark:

Почему бы не придерживаться этой структуры приложения?
  cart 
            components
            services
        products
            components
            models
            services
        shared
            directives
            pipes
        core
            services
Тогда для сервисов ProductsService, CartService найдется место и они не будут в корне проекта

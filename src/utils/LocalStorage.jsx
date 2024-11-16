
// const employees=[
//   {
//     "id": 1,
//     "email": "employee1@example.com",
//     "password": "123",
//     "firstName": "John",
//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 1
//     },
//     "tasks": [
//       {
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Task Title 1",
//         "taskDescription": "Description for task 1",
//         "taskDate": "2023-10-05",
//         "category": "Category 3",
//         "taskCounts": { "active": 1, "newTask": 0, "completed": 0, "failed": 1 }
//       },
//       {
//         "active": false,
//         "newTask": true,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Task Title 2",
//         "taskDescription": "Description for task 2",
//         "taskDate": "2023-10-15",
//         "category": "Category 1",
//         "taskCounts": { "active": 0, "newTask": 1, "completed": 1, "failed": 0 }
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "email": "employee2@example.com",
//     "password": "123",
//     "firstName": "Alice",
//     "taskCounts": {
//       "active": 1,
//       "newTask": 1,
//       "completed": 1,
//       "failed": 0
//     },
//     "tasks": [
//       {
//         "active": false,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Task Title 3",
//         "taskDescription": "Description for task 3",
//         "taskDate": "2023-10-17",
//         "category": "Category 2",
//         "taskCounts": { "active": 0, "newTask": 1, "completed": 0, "failed": 0 }
//       },
//       {
//         "active": true,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Task Title 4",
//         "taskDescription": "Description for task 4",
//         "taskDate": "2023-10-20",
//         "category": "Category 1",
//         "taskCounts": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "email": "employee3@example.com",
//     "password": "123",
//     "firstName": "Mike",
//     "taskCounts": {
//       "active": 2,
//       "newTask": 0,
//       "completed": 0,
//       "failed": 1
//     },
//     "tasks": [
//       {
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Task Title 5",
//         "taskDescription": "Description for task 5",
//         "taskDate": "2023-10-21",
//         "category": "Category 3",
//         "taskCounts": { "active": 1, "newTask": 0, "completed": 0, "failed": 1 }
//       },
//       {
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Task Title 6",
//         "taskDescription": "Description for task 6",
//         "taskDate": "2023-10-22",
//         "category": "Category 2",
//         "taskCounts": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "email": "employee4@example.com",
//     "password": "123",
//     "firstName": "Sarah",
//     "taskCounts": {
//       "active": 1,
//       "newTask": 1,
//       "completed": 0,
//       "failed": 1
//     },
//     "tasks": [
//       {
//         "active": false,
//         "newTask": true,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Task Title 7",
//         "taskDescription": "Description for task 7",
//         "taskDate": "2023-10-23",
//         "category": "Category 4",
//         "taskCounts": { "active": 0, "newTask": 1, "completed": 0, "failed": 1 }
//       },
//       {
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Task Title 8",
//         "taskDescription": "Description for task 8",
//         "taskDate": "2023-10-24",
//         "category": "Category 1",
//         "taskCounts": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "email": "employee5@example.com",
//     "password": "123",
//     "firstName": "David",
//     "taskCounts": {
//       "active": 0,
//       "newTask": 2,
//       "completed": 1,
//       "failed": 1
//     },
//     "tasks": [
//       {
//         "active": false,
//         "newTask": true,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Task Title 9",
//         "taskDescription": "Description for task 9",
//         "taskDate": "2023-10-25",
//         "category": "Category 2",
//         "taskCounts": { "active": 0, "newTask": 1, "completed": 0, "failed": 1 }
//       },
//       {
//         "active": false,
//         "newTask": true,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Task Title 10",
//         "taskDescription": "Description for task 10",
//         "taskDate": "2023-10-26",
//         "category": "Category 3",
//         "taskCounts": { "active": 0, "newTask": 1, "completed": 1, "failed": 0 }
//       }
//     ]
//   },
//   {
//     "id": 6,
//     "email": "employee6@example.com",
//     "password": "123",
//     "firstName": "Emma",
//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 0,
//       "failed": 0
//     },
//     "tasks": [
//       {
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Task Title 11",
//         "taskDescription": "Description for task 11",
//         "taskDate": "2023-10-27",
//         "category": "Category 5",
//         "taskCounts": { "active": 1, "newTask": 0, "completed": 0, "failed": 0 }
//       },
//       {
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Task Title 12",
//         "taskDescription": "Description for task 12",
//         "taskDate": "2023-10-28",
//         "category": "Category 1",
//         "taskCounts": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
//       }
//     ]
//   }
// ]


const employees = [
  {
      "id": 1,
      "firstName": "Arjun",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update website",
              "taskDescription": "Revamp the homepage design",
              "taskDate": "2024-10-12",
              "category": "Design" 
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Client meeting",
              "taskDescription": "Discuss project requirements",
              "taskDate": "2024-10-10",
              "category": "Meeting"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Fix bugs",
              "taskDescription": "Resolve bugs reported in issue tracker",
              "taskDate": "2024-10-14",
              "category": "Development"
          }
      ]
  },
  {
      "id": 2,
      "firstName": "Sneha",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
          "active": 1,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Database optimization",
              "taskDescription": "Optimize queries for better performance",
              "taskDate": "2024-10-11",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Design new feature",
              "taskDescription": "Create mockups for the new feature",
              "taskDate": "2024-10-09",
              "category": "Design"
          }
      ]
  },
  {
      "id": 3,
      "firstName": "Ravi",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare presentation",
              "taskDescription": "Prepare slides for upcoming client presentation",
              "taskDate": "2024-10-13",
              "category": "Presentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Code review",
              "taskDescription": "Review the codebase for optimization",
              "taskDate": "2024-10-12",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Testing",
              "taskDescription": "Test the latest build for bugs",
              "taskDate": "2024-10-08",
              "category": "QA"
          }
      ]
  },
  {
      "id": 4,
      "firstName": "Priya",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Write documentation",
              "taskDescription": "Update the project documentation",
              "taskDate": "2024-10-13",
              "category": "Documentation"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Set up CI/CD",
              "taskDescription": "Implement continuous integration pipeline",
              "taskDate": "2024-10-11",
              "category": "DevOps"
          }
      ]
  },
  {
      "id": 5,
      "firstName": "Karan",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "UI redesign",
              "taskDescription": "Redesign the user interface for better UX",
              "taskDate": "2024-10-14",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Deploy new build",
              "taskDescription": "Deploy the latest build to production",
              "taskDate": "2024-10-09",
              "category": "DevOps"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Client feedback",
              "taskDescription": "Gather feedback from clients after product launch",
              "taskDate": "2024-10-12",
              "category": "Support"
          }
      ]
  }
];


  const admin= [
    {
      "id": 1,
      "firstName":"admin",
      "email": "admin@example.com",
      "password": "123"
    }
  ]

export const setLocalStorage=()=>{
      localStorage.setItem('empolyess',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
}

export const getAdminLocalStorage = ()=>{
      const admin=JSON.parse(localStorage.getItem('admin'))
      return {admin}
}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('empolyess'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
}


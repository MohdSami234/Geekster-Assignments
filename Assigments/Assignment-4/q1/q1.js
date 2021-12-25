//Assignment -4
//Q-1 Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.

var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'Ujjwal',
      'marks': 80,
    },
    {
      'name': 'Anshul',
      'marks': 89,
    },
    {
      'name': 'Lasya',
      'marks': 77,
    },
    {
      'name': 'Ayush',
      'marks': 70,
    },
    {
     'name': 'Gourav',
     'marks': 90,
    },
    {
     'name': 'Niladri',
     'marks': 85,
    },
    {
     'name': 'Ugrasen',
     'marks': 87,
    }
  ],
};

var arr = g_class['students'];
for(let i=0;i<arr.length;i++){
     var a = arr[i]['marks'];
     if(a >= 85){
      console.log(arr[i].name);
        
     }
}

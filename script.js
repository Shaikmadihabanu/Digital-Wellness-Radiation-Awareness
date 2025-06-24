const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 10,
      behavior: 'smooth'
    });
  });
});

//   const ctx = document.getElementById('surveyChart').getContext('2d');
//   const surveyChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: [
//         '📱 4+ hrs/day (60%)',
//         '⚠️ Unaware of Radiation Risks (75%)',
//         '🌙 Use Mobile at Bedtime (40%)',
//         '🔐 Aware of Cyber Safety (20%)'
//       ],
//       datasets: [{
//         data: [60, 75, 40, 20],
//         backgroundColor: [
//           '#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'
//         ],
//         borderColor: '#fff',
//         borderWidth: 2
//       }]
//     },
// options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'bottom'
//         },
//         title: {
//           display: true,
//           text: 'Survey Highlights'
//         }
//       }
//     }
//   });

// const ctx = document.getElementById('surveyChart').getContext('2d');

// new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: [
//       '📱 4+ hrs/day',
//       '⚠️ Unaware of Risks',
//       '🌙 Bedtime Usage',
//       '🔐 Cyber Safety Aware'
//     ],
//     datasets: [{
//       data: [60, 75, 40, 20],
//       backgroundColor: ['#f88', '#6cf', '#ffcd56', '#4bc0c0'],
//       borderColor: '#fff',
//       borderWidth: 2
//     }]
//   },
//   options: {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Survey Highlights'
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   }
// });

  const ctx = document.getElementById('surveyChart').getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        '📱 4+ hrs/day (60%)',
        '⚠️ Unaware of Radiation Risks (75%)',
        '🌙 Bedtime Usage (40%)',
        '🩺 Health Issues (25%)'
      ],
      datasets: [{
        data: [60, 75, 40, 25],
        backgroundColor: ['#f88', '#36a2eb', '#ffcd56', '#4bc0c0'],
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Survey Highlights'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });
 


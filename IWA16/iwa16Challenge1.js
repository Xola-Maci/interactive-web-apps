const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  // Create a function to format minutes as hh:mm
const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }
  
  // Create a function to generate the HTML for each athlete
  const createHtml = (athleteId) => {
    const athlete = data.response.data[athleteId];
    const [latestRace] = athlete.races.slice(-1); // Get the latest race
    const [day, month, year] = new Date(latestRace.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    }).split(' ');
  
    const totalTime = latestRace.time.reduce((acc, lapTime) => acc + lapTime, 0);
    
    const fragment = document.createDocumentFragment();
  
    const title = document.createElement('h2');
    title.textContent = athlete.id;
    fragment.appendChild(title);
  
    const list = document.createElement('dl');
    list.innerHTML = /* html */ `
      <dt>Full Name</dt>
      <dd>${athlete.firstName} ${athlete.surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${athlete.races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${formatTime(totalTime)}</dd>
    `;
  
    fragment.appendChild(list);
    return fragment;
  }
  
  // Get the section elements and append the athlete information
  const sectionNM372 = document.querySelector('[data-athlete="NM372"]');
  sectionNM372.appendChild(createHtml('NM372'));
  
  const sectionSV782 = document.querySelector('[data-athlete="SV782"]');
  sectionSV782.appendChild(createHtml('SV782'));
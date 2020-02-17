const teamMember = [
    {
        name: 'Dipal Blackowicz',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/dipal-blackowicz/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-dipal-blackowicz-1.jpg',
        
    },
    {
        name: 'Alyssa Campione',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/alyssa-campion/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-alyssa-campione.jpg',
        
    },
    {
        name: 'Mary Long',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/mary-long/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-mary-long.jpg',
        
    },
    {
        name: 'Michael Lucas',
        officeArea: 'sales',
        teamPageLink: 'https://stumm.com/team/michael-lucas/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-michael-lucas-1.jpg',
        
    },
    {
        name: 'Matt Martin',
        officeArea: 'sales',
        teamPageLink: 'https://stumm.com/team/matt-martin/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-matt-martin-1.jpg',
        
    },
    {
        name: 'Brian Stumm',
        officeArea: 'executiveteam',
        teamPageLink: 'https://stumm.com/team/brian-stumm/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-brian-stumm.jpg',
        
    },
    {
        name: 'Dave Stumm, Jr.',
        officeArea: 'executiveteam',
        teamPageLink: 'https://stumm.com/team/dave-stumm-jr/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-dave-stumm-1.jpg',
        
    },
    {
        name: 'Jack Stumm',
        officeArea: 'executiveteam',
        teamPageLink: 'https://stumm.com/team/jack-stumm/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-jack-stumm-1.jpg',
        
    },
    {
        name: 'Kristin Stumm',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/kristin-stumm/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-kristin-stumm.jpg',
        
    },
    {
        name: 'Marcy Testa',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/marcy-testa/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-marcy-testa-1.jpg',
        
    },
    {
        name: 'Carrie Vest',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/carrie-vest/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-carrie-vest.jpg',
        
    },
    {
        name: 'Adam Wright',
        officeArea: 'clientservice',
        teamPageLink: 'https://stumm.com/team/adam-wright/',
        cardImg: 'https://stumm.com/wp-content/uploads/2019/11/stumm-adam-wright.jpg'
        
        
    },

]

const app = new Vue({
    el: '#filter-container',
    data: {
        teamList: teamMember,
        type: '',
    }, 
    methods: {
        filterTeam: function(){
            this.type = event.target.innerText;
            console.log(event.target.innerText);
        }, 
    }, 
    computed: {
        uniqueItemsList: function(){
          const types = [];
          this.teamList.forEach((item)=>{
            if(!types.includes(item.officeArea)){
              types.push(item.officeArea);
            }
          });
          return types;
        }
      }
      
})
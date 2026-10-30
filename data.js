// EDIT THIS FILE to add recommendations. Duplicate an object for each contest.
// scope: 'statewide', 'regional', 'berkeley', 'oakland', or 'district'.
// districtType and district are used only for district-specific races.
// For statewide propositions, set proposition to the numeric ballot number
// and contest to the short headline. summary appears in both context modes.
const ITEMS = [
 {
  scope: 'statewide',
  contest: 'California Governor',
  recommendation: 'Xavier Becerra',
  summary: 'Becerra is a moderate Democrat with a lot of less-than-progressive positions, but he is obviously the better choice than the Republican candidate.',
  details: '',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Lieutenant Governor',
  recommendation: 'Fiona Ma',
  summary: 'Another straightforward Dem vs. Rep. Not ideal, but Ma is clearly the better choice.',
  details: '',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Attorney General',
  recommendation: 'Rob Bonta',
  summary: 'Ditto. Imperfect democrat vs. classic republican. An easy choice.',
  details: '',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Secretary of State',
  recommendation: 'Shirley Weber',
  summary: 'Same again, an easy vote for a moderate democrat over a Republican.',
  details: '',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Treasurer',
  recommendation: 'Eleni Kounalakis',
  summary: 'Conventional Dem vs Rep, a clear choice for Kounalakis.',
  details: '',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Controller',
  recommendation: 'Malia Cohen',
  summary: 'Add one or two sentences explaining your choice.',
  details: 'Add your longer analysis here, if you have time.',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Superintendent of Public Instruction',
  recommendation: 'Richard Barrera',
  summary: 'Barrera\'s policy platform is mostly progressive, and his Republican opponent is truly troubling.',
  details: 'Add your longer analysis here, if you have time.',
  sources: []
},
 {
  scope: 'statewide',
  contest: 'Insurance commissioner',
  recommendation: 'Jane Kim',
  summary: 'This is the only dem. vs. dem. statewide race. Kim is running on aggressive regulation of insurance companies and a public option for disaster insurance. She is clearly more progressive and informed than her opponent.',
  details: 'Add your longer analysis here, if you have time.',
  sources: []
},
 {
  "scope": "statewide",
  "proposition": 1,
  "contest": "Affordable Housing Bonds",
  "recommendation": "YES",
  "summary": "This is basically just a boost for affordable housing. In general, we should not need to be funding housing from random ballot propositions, but for now this is obviously a net positive.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 2,
  "contest": "Rainy Day Fund",
  "recommendation": "YES",
  "summary": "California’s tax revenue is super volatile, and keeping a bit more of it aside in boom years to respond to later shocks is a reasonable approach that would help keep public services running in crisis times.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 3,
  "contest": "Tax the Rich for Schools",
  "recommendation": "YES",
  "summary": "This one is easy. It extends an existing tax on high-income Californians that specifically goes to public schools and healthcare.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 4,
  "contest": "Publicly Funded Election Campaigns",
  "recommendation": "YES",
  "summary": "Campaign finance reform that repeals an existing ban on state/local governments establishing public financing for election campaigns. Lots of other countries have this, and it’s one of the only ways to run a democracy in which regular (not rich) people can still run for office. This doesn't establish public financing itself, but allows governments to do so.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 5,
  "contest": "Reform Recall Elections",
  "recommendation": "YES",
  "summary": "This is a slightly weird thing, but currently in CA if someone in statewide office gets recalled (e.g. governor), the vote to replace them is by a plurality vote. So, if 50 people are replacement candidates and one gets 20% of the votes, they become governor even though 80% of people didn’t vote for them. This prop repeals that system. Instead, vacancies would be filled through the usual procedures (e.g. the lieutenant governor replacing a recalled governor). I think we can do better than this, but it’s an improvement for now.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 37,
  "contest": "Middle-Income Homebuyer Loans",
  "recommendation": "YES",
  "summary": "This is the most complex prop on the ballot, and the recommendation I’m the least confident about. It’s poorly designed housing finance policy that could help some middle-income Californians buy homes, but props up finance capital and doesn’t improve housing affordability for low-income people. The assistance comes in the form of loans that buyers must repay. On balance, I think it will do more good than bad, but only marginally.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 38,
  "contest": "Medical Research Bonds",
  "recommendation": "NO",
  "summary": "Saying no to funding for research is not an easy call, but in this case I think it’s justified. Half of the $8.4 billion would go to a single institution. As of October, only one institution meets the requirements to receive that funding. It’s backed by the same billionaire who helped write this proposition, and reportedly has only three employees, none of whom are research scientists.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 39,
  "contest": "Voter ID Requirements",
  "recommendation": "NO",
  "summary": "This prop would require government-issued ID to vote in person, and additional ID verification for mail ballots. We know that this is not an effective solution to existing (small) election fraud, and that voter ID requirements can disenfranchise eligible voters. Lots of countries/states run free and fair elections without voter ID requirements.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 40,
  "contest": "Billionaire Tax",
  "recommendation": "YES",
  "summary": "Tax. Those. BILLIONAIRES!!! I have many design gripes with this prop but it’s a clear and loud yes from me.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 41,
  "contest": "Restrict New State Taxes",
  "recommendation": "NO",
  "summary": "Hard no. This might not be clear from the language of the prop, but this is specifically designed to thwart the billionaire tax (Prop 40). Even if Prop 40 passes, Prop 41 could prevent it from taking effect if it receives more Yes votes.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 42,
  "contest": "Ban Certain State Taxes",
  "recommendation": "NO",
  "summary": "As in Prop 41, this was also designed to thwart the billionaire tax. If both Prop 40 and Prop 42 pass, the one with more Yes votes could take precedence. An easy no vote.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 43,
  "contest": "Restrict Local Tax Increases",
  "recommendation": "NO",
  "summary": "This isn’t directly about the billionaire tax, but it makes it much harder for local governments to raise revenue for public services, including by requiring a supermajority vote (2/3) for certain local tax increases instead of a simple majority.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 44,
  "contest": "Community Health Clinic Spending",
  "recommendation": "NO",
  "summary": "I really tried hard to find evidence about this prop, but it turns out that there’s just an enormous amount of uncertainty. The healthcare workers' union supports it; Planned Parenthood (among others) opposes it. I couldn’t find comprehensive accounts of what clinics currently spend and what fraction of that could be considered wasteful. I don’t think I can vote for drawing a hard line at 90% of revenue spent on program services with no detailed evidence about the scope of the existing problem and some sensitivity testing of that threshold.",
  "details": "",
  "sources": []
},
 {
  "scope": "statewide",
  "proposition": 45,
  "contest": "Environmental Review Reform",
  "recommendation": "NO",
  "summary": "Another really complex prop. My biggest issue is that this is not just about speeding up environmental review processes, it changes what is counted as an environmental impact at all. It also restricts consideration of alternative projects and narrows tribal consultation requirements. The existing process is in serious need of reform, but this is not the way to do it.",
  "details": "",
  "sources": []
},
 {
  "scope": "regional",
  "contest": "Bay Area Regional Transit Measure — Save Bay Area Transit",
  "recommendation": "YES!",
  "summary": "Protecting public transit in the Bay??? Yes please. This would provide substantial funding to prevent service cuts and keep the Bay Area's transit systems running. There are problems with regressive financing around this, but it will be a big win.",
  "details": "",
  "sources": []
},
 {scope:'berkeley', contest:'Berkeley local election — placeholder', recommendation:'Recommendation pending', summary:'Replace with a verified Berkeley race.', details:'', sources:[]},
 {scope:'oakland', contest:'Oakland local election — placeholder', recommendation:'Recommendation pending', summary:'Replace with a verified Oakland race.', details:'', sources:[]},
 {scope:'district', city:'oakland', districtType:'School board', district:'4', contest:'School Board District 4 — placeholder', recommendation:'Recommendation pending', summary:'Add verified candidates and recommendation.', details:'', sources:[]}
];

// Editable section summaries, shared by both cities.
const SECTION_TLDRS = {
  "statewide": "TLDR: Vote for Jane Kim for Insurance Commissioner!! Pretty much every other race is classic suboptimal centrist Dem vs obviously terrible Rep.",
  "propositions": "TLDR: Lots happening here but the big boys are YES on the billionaire tax (40), NO on the props that oppose it (41, 42), and YES to the Bay Area Regional Transit Measure!",
  "regional": "TLDR: YES on the Bay Area Regional Transit Measure!",
  "local": "TLDR: Coming soon!"
};

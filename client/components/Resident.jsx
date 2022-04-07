import React from 'react';

function Resident(props) {
  return (
    <ul>
      <li>{props.firstName} {props.lastName}</li>
      <li>{props.program}</li>
      <li>{props.linkedin}</li>
      <li>{props.github}</li>
    </ul>
  );
}
/*
  - First Last Name
  - Cohort + Number
  - linkedin
  - github
  - osp
  - reinforcement
  - company_id
*/

// const { characters } = this.state;

// if (!characters) return null;

// if (!characters.length) return (
//   <div>Sorry, no characters found</div>
// );

// const charElems = characters.map((char, i) => {
//   return (
//     <CharacterCard
//       key={i}
//       info={char}
//       openModal={this.openModal}
//     />
//   );
// });
export default Resident;
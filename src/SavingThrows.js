import React, {Component} from 'react';
// import {modCalc} from "./Utils";
/*
Roll: D20 + Ability modifier
Affected by advantage and disadvantage
Proficiency Bonus
*/
/*
Description:
A saving throw—also called a save—represents an attempt to resist a spell,
a trap, a poison, a disease, or a similar threat. You don’t normally decide to
make a saving throw; you are forced to make one because your character or
monster is at risk of harm.
Roll:
To make a saving throw, roll a d20 and add the appropriate ability modifier.
For example, you use your Dexterity modifier for a Dexterity saving throw.
A saving throw can be modified by a situational bonus or penalty and can be
affected by Advantage and Disadvantage, as determined by the GM.
Each class gives proficiency in at least two Saving Throws. The Wizard,
for example, is proficient in Intelligence saves. As with skill Proficiencies,
proficiency in a saving throw lets a character add his or her Proficiency Bonus
to Saving Throws made using a particular ability score. Some Monsters have
saving throw Proficiencies as well.
The Difficulty Class for a saving throw is determined by the Effect that causes
it. For example, the DC for a saving throw allowed by a spell is determined by
the caster’s Spellcasting Ability and Proficiency Bonus.
The result of a successful or failed saving throw is also detailed in the Effect
that allows the save. Usually, a successful save means that a creature suffers
no harm, or reduced harm, from an Effect.
*/


function savingThrowModCalc(score)
{
  if (score == null)
  {
    return "+0"
  }
  if (score>=0){
    return "+" + score;
  }
  else{
    return score;
  }
}

function proficiencyToggle(proficiency)
{
  if(proficiency){
    return <span class="material-icons">brightness_1</span>

  }
  else{
    return <span class="material-icons">brightness_1</span>
  }

}

const SavingThrowsParser = (props) => {
  var saving_throws = []
  for ( const savingThrowData of props.savingThrowsData  )
  {
    console.log(savingThrowData);
    saving_throws.push(
            <div key={savingThrowData["ability"].toUpperCase()} className="saving_throw">
              proficiencyToggle(savingThrowData["proficiency"])
              <div className="score">{savingThrowModCalc(savingThrowData["modifier"])}</div>
              <div className="name">{savingThrowData["ability"].toUpperCase()}</div>
            </div>
          );
  }
  return saving_throws;
}

const SavingThrows = (props) => {
  const {savingThrowsData} = props
  console.log(savingThrowsData);
  return (
    <SavingThrowsParser savingThrowsData={savingThrowsData} />
  )
}

export default SavingThrows

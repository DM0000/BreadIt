// import bread from 'src/assets/Bread.jpg'
import { faker, Faker } from '@faker-js/faker'
// function stubFiller(image) => {
//     return {name = faker.person.fullName()
//         county = faker.location.country() }
//         image =
//     }

function ArticleStub() {
    return (
<div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
);

}

//   export default function MyButton() {
//     return (
//       <li>{ "fafafsafasfasf"}
//         </li>
//     );
//   }



//   export default function FakeStub(){
//       const names =  faker.person.fullName() ;
//       const country = county = faker.location.country();
//     return (
//          <li> {names} In {country}
// {/*            <img src = {sBread}/>   */}
//            </li>
//        );
//   }

//  export default   function Stub(fakeProfile) {
//       return (
//         <li>{ "$fakeProfile.name In $fakeProfile.country"}
//           </li>
//       );
//     }
//     function Stub(name, country) {
//       return (
//         <li>{ "$name In $country"}
//           <img src = {sBread}/>  </li>
//       );
//     }
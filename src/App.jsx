import LadingSection from './components/LandingSection';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <LadingSection image="/assets/hand2.png" />
      <LadingSection
        image="/assets/milk.png"
        title="MUSEUM OF CANDY"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corporis recusandae dolor dicta veniam sapiente velit excepturi, possimus voluptate unde delectus harum assumenda culpa laborum quos impedit ipsam illo eum!"
        type="type1"
      ></LadingSection>
      <LadingSection
        image="/assets/gumball.png"
        title="MUSEUM OF CANDY"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corporis recusandae dolor dicta veniam sapiente velit excepturi, possimus voluptate unde delectus harum assumenda culpa laborum quos impedit ipsam illo eum!"
        type="type2"
      ></LadingSection>
      <LadingSection
        image="/assets/sprinkles.png"
        title="MUSEUM OF CANDY"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corporis recusandae dolor dicta veniam sapiente velit excepturi, possimus voluptate unde delectus harum assumenda culpa laborum quos impedit ipsam illo eum!"
        type="type1"
      ></LadingSection>
    </>
  );
}

export default App;

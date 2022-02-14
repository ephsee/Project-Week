import React from 'react';

const textAbout = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante velit, molestie vel libero accumsan, consequat commodo felis. Nam at tellus lorem. Vivamus nec condimentum libero, eget mollis risus. Sed consectetur, urna non commodo finibus, velit quam finibus mauris, quis scelerisque mi nibh tincidunt dolor. Phasellus pretium felis a ex elementum gravida. In hac habitasse platea dictumst. Donec auctor velit enim, et fermentum lectus auctor non. Etiam ac ligula id mauris lobortis gravida a sit amet felis. Nulla feugiat felis in sem accumsan sollicitudin id ut ante. Phasellus condimentum interdum tincidunt. In non sapien euismod, posuere neque eget, condimentum sem. In placerat ultricies malesuada. Aenean ut nibh eu nisl pulvinar lacinia. Curabitur volutpat arcu at auctor euismod. Cras hendrerit vehicula lectus. Vestibulum ac convallis risus. Integer blandit elementum augue vitae commodo. Donec eget mauris elementum, fermentum enim quis, elementum erat. Nam viverra neque vitae odio viverra porta. Nunc tellus mauris, mollis sagittis ullamcorper ut, pharetra ornare diam. Morbi dignissim a nisi ac placerat. Quisque bibendum vel leo a pretium. Phasellus ornare, enim id sollicitudin iaculis, massa neque tempus neque, quis hendrerit nisi enim vitae arcu. Nullam eget ante ac lacus mattis laoreet. Suspendisse lacinia odio mauris, dapibus ullamcorper neque mattis ac. Proin consectetur erat sit amet odio malesuada lacinia. Integer efficitur finibus vestibulum. Sed tempor libero id leo malesuada finibus. Maecenas iaculis mi quam, et iaculis tellus commodo ut. In tristique suscipit orci vel suscipit. Sed sit amet lorem justo. Nunc scelerisque laoreet lacus quis accumsan. Vivamus egestas ex in tellus ullamcorper sagittis. Nulla aliquet condimentum urna, id suscipit metus. Quisque convallis eu justo eget vestibulum.";

function Home() {
    return (
        <>
            <h1 className="main title"> About</h1>
            <p>{textAbout}  </p>

            <h2 className="tittle"> Why? </h2>
            <p>{textAbout}  </p>
        </>
    )
}

export default Home;
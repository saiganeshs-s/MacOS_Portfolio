import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "#components";
import {
    Resume,
    Safari,
    Terminal,
    Text,
    ImageWindow,
    Contact,
    Finder,
    Photos,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <ImageWindow />
            <Contact />
            <Photos />
            <Home />
        </main>
    );
};

export default App;
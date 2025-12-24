import Latex from '@components/Latex/Latex.tsx';
import Footer from '@components/Footer/Footer.tsx';
import stars from '@assets/images/stars.png';
import styles from './RationalPointsOnEllipticCurves.module.css';

export default function RationalPointsOnEllipticCurves() {
    const PythagoreanTheorem = <a href='https://en.wikipedia.org/wiki/Pythagorean_theorem' target='_blank'>Pythagorean Theorem</a>
    const PythagoreanTriple = <a href='https://en.wikipedia.org/wiki/Pythagorean_triple' target='_blank'>Pythagorean Triple</a>;
    const PrimitivePythagoreanTriple = <a href='https://en.wikipedia.org/wiki/Pythagorean_triple' target='_blank'>primitive Pythagorean Triple</a>;

    return <>
        <article>
            <h1>Rational Points on Elliptic Curves</h1>
            <section>
                <div>
                    <h2>Introduction</h2>
                    <p>The information on this page has been extracted from my <a href='https://math.unt.edu/research/stars.html' target='_blank'>Students Talk about Research Seminar</a> (STaRS) presentation given on November 1, 2024. The goal of the presentation was to introduce undergraduate students with a precalculus level mathematical background to Fermat's Last Theorem and Elliptic Curves.</p>
                </div>
                <img src={stars} className={styles.stars} />

                <h2>Triangles</h2>
                <p>Famously, the {PythagoreanTheorem} states that if <Latex math='a,b,c' /> are the side lengths of a right angle triangle, with <Latex math='c' /> being the hypotenuse, then these numbers must satisfy the following equation:</p>
                <Latex math='a^2 + b^2 = c^2' center />

                <p>Whole number solutions to this equation have been known for millennia. In fact, there is a <a href='https://en.wikipedia.org/wiki/Plimpton_322' target='_blank'>Babylonian clay tablet</a> with a list of them believed to have been written around 1800 BC. Any set of three positive integers which are the side lengths of a right angle triangle is called a {PythagoreanTriple}, and if these three positive integers have no common factors, we call it a {PrimitivePythagoreanTriple}.</p>

                <p>Some examples of primitive Pythagorean Triples include:</p>
                <Latex math='\{3, 4, 5\}, \ \{5, 12, 13\}, \text{ and } \{8, 15, 17\}' center />

                <p>A non-example of a {PrimitivePythagoreanTriple} is <Latex math='\{6, 8, 10\}' />. Notice that these three numbers have a common factor of <Latex math='2' />, so it is not primitive. However, it is still a {PythagoreanTriple} since you could construct a right angle triangle with these side lengths.</p>
            </section>

            <section>
                <h2>Counting</h2>

                <p>After seeing a few of these, it is natural to ask how many primitive Pythagorean Triples exist. Indeed, there is no obvious reason why there should even be infinitely many of them. To answer this question, we will first need to define what mathematicians mean when they say two sets have the same size (or <a href='https://en.wikipedia.org/wiki/Cardinality' target='_blank'>cardinality</a>).</p>

                <p>In mathematics, we say two sets <em>have the same cardinality</em> if we can pair them up one by one. For example, if everyone in a stadium is sitting in a seat and all seats have a person sitting in them, then we know there are the same number of seats as people. The technical term for this is a <a href='https://en.wikipedia.org/wiki/Bijection' target='_blank'>bijection</a> of sets.</p>
            </section>

            <section>
                <h2>Rational Points on the Unit Circle</h2>

                <p>We call a point <Latex math='(x, y)' /> in 2D space a <em>rational point</em> if both coordinates <Latex math='x \text{ and } y' /> of the point are <a href='https://en.wikipedia.org/wiki/Rational_number' target='_blank'>rational numbers</a>. That is, both <Latex math='x \text{ and } y' /> can be expressed as a ratio of integers with non-zero denominator. For example, the point <Latex math='(-\frac 1 3, \frac 4 5)' /> is rational, but the point <Latex math='(\pi, \sqrt 2)' /> isn't.</p>

                <p>The unit circle is defined to be the circle of radius 1 centered at the origin with the equation <Latex math='x^2 + y^2 = 1' />.</p>
            </section>

            <section>
                <h2>Counting primitive Pythagorean Triples</h2>
                <p>If you think that <Latex math='a^2 + b^2 = c^2' /> and <Latex math='x^2 + y^2 = 1' /> have a similar structure, then you will be right, and this is not by coincidence!</p>
            </section>
        </article>
        <Footer />
    </>;
}
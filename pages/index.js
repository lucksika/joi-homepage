import Head from "next/head";
import {
  Link,
  Image,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Icon,
} from "@chakra-ui/react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import Badge from "../components/Badge";
import Section from "../components/Section";

import styles from "../styles/Home.module.css";

const ProfileImage = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {isHovering ? (
          <motion.div whileHover={{ rotate: 360 }}>
            <Image
              src="/images/profile_a.png"
              borderRadius="full"
              boxSize="200px"
              alt="Joi Losuvalna"
            />
          </motion.div>
        ) : (
          <motion.div whileHover={{ rotate: 360 }}>
            <Image
              src="/images/profile.png"
              className={styles.borderCircle}
              borderRadius="full"
              boxSize="200px"
              alt="Joi Losuvalna"
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Joi - Homepage</title>
        <meta name="og:title" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container p={8} maxW="900px">
        <Flex flexDirection="column" alignItems="center" gap={10}>
          <Box textAlign="center">
            <Heading fontWeight={900}>
              <Text fontSize={{ sm: "40px", base: "60px" }}>
                Hi, my name is Joi
              </Text>
            </Heading>
            <Text fontSize={25} p={5}>
              I am a developer! 🧑🏻‍💻{" "}
            </Text>
          </Box>
          <ProfileImage />

          <div className={styles.profile_text}>
            <Section delay={0.1}>
              <Heading variant="title">Work</Heading>
              <Text fontSize={16}>
                &emsp;I am currently a{" "}
                <Badge text="data scientist" color="yellow" /> with experience
                not only in analysis but also in{" "}
                <Badge text="design (UX/UI)" color="green" />,{" "}
                <Badge text="coding" color="red" /> and{" "}
                <Badge text="software development" color="blue" />. I am
                responsible for building data pipelines, designing applications
                and developing applications; the experiences have given me
                creativity, teamwork skill and self-supervision. I am able to
                communicate in Thai and English.
              </Text>
            </Section>
          </div>

          <div className={styles.profile_text}>
            <Section delay={0.1}>
              <Heading variant="title">Bio</Heading>
              <div className={styles.bio_bullets}>
                <span>
                  <b>2017</b>&emsp;
                </span>
                <span>
                  Graduated BS of Computer Engineering, 1st Class honors at
                  Prince of Songkhla University, Thailand
                </span>
              </div>
              <div className={styles.bio_bullets}>
                <span>
                  <b>2018</b>&emsp;
                </span>
                <span>
                  Worked at System Engineering Consultants Co,.LTD.
                  (株式会社セック)
                </span>
              </div>
              <div className={styles.bio_bullets}>
                <span>
                  <b>2019</b>&emsp;
                </span>
                <span>Worked at Hitachi, Ltd.,(株式会社日立)</span>
              </div>
              <div className={styles.bio_bullets}>
                <span>
                  <b>2020 to Present</b>&emsp;
                </span>
                <span>Working at WhiteNarwhal Japan.</span>
              </div>
            </Section>
          </div>

          <div className={styles.profile_text}>
            <Section delay={0.1}>
              <Heading variant="title">Check out my resume</Heading>
              <Text fontSize={16}>
                <Link
                  href="https://drive.google.com/file/d/1GQd7aQe_WwJ07B8gD5LcdtwIaqgRGFfH/view?usp=sharing"
                  target="_blank"
                >
                  <Button variant="solid" rightIcon={<Icon as={BsDownload} />}>
                    Grab a PDF copy
                  </Button>
                </Link>
              </Text>
            </Section>
          </div>

          <div className={styles.profile_text}>
            <Section delay={0.1}>
              <Heading variant="title">Side projects</Heading>
              <Flex gap={8}>
                <Flex alignItems="center" gap={2}>
                  <Image
                    src="/images/pomo_logo.png"
                    borderRadius="full"
                    boxSize="25px"
                    alt="pomo-omega"
                  />
                  <Link href="https://pomo-omega.vercel.app/" fontSize={16}>
                    Pomo
                  </Link>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <Image
                    src="/images/fun_fact_logo.png"
                    borderRadius="full"
                    boxSize="25px"
                    alt="fun-fact-tree"
                  />
                  <Link
                    href="https://fun-facts-three.vercel.app/"
                    fontSize={16}
                  >
                    Fun Fact!
                  </Link>
                </Flex>
              </Flex>
            </Section>
          </div>

          <div id="contact-seciton" className={styles.profile_text}>
            <Section delay={0.1}>
              <Heading variant="title">Contact me</Heading>
              <Flex gap={10}>
                <Link
                  href="https://www.linkedin.com/in/lucksika"
                  target="_blank"
                >
                  <Icon w={6} h={6} as={BsLinkedin}></Icon>
                </Link>
                <Link href="https://github.com/lucksika" target="_blank">
                  <Icon w={6} h={6} as={BsGithub}></Icon>
                </Link>
                <Link href="mailto:lucksika.los@gmail.com" target="_blank">
                  <Icon w={6} h={6} as={MdEmail}></Icon>
                </Link>
                <Link href="https://twitter.com/jlos_21" target="_blank">
                  <Icon w={6} h={6} as={BsTwitter}></Icon>
                </Link>
                <Link
                  href="https://www.instagram.com/jlens___/"
                  target="_blank"
                >
                  <Icon w={6} h={6} as={BsInstagram}></Icon>
                </Link>
              </Flex>
            </Section>
          </div>
        </Flex>
      </Container>

      <Container p={20} m="auto" textAlign="center">
        <Text color="gray">Designed and Developed by Joi Losuvalna.</Text>
      </Container>
    </>
  );
}

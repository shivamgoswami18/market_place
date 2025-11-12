import { Fragment, type FC } from "react";
import { Col, Image, Row } from "react-bootstrap";

import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";

import media6 from "../../../assets/images/media/media-6.jpg";
import media9 from "../../../assets/images/media/media-9.jpg";
import media18 from "../../../assets/images/media/media-18.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";
import media35 from "../../../assets/images/media/media-35.jpg";
import media47 from "../../../assets/images/media/media-47.jpg";

interface Friend {
  imgSrc: string;
  name: string;
  mail: string;
}

interface ProfileSummary {
  imgSrc: string;
  name: string;
  mail: string;
  followers: string;
  color: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  icon: "add" | "close" | "heart" | "settings" | "star" | "shared";
}

const galleryImages: Array<{ src: string; alt: string }> = [
  { src: media6, alt: "Mountain landscape at sunset" },
  { src: media9, alt: "City skyline with evening lights" },
  { src: media18, alt: "Work desk with laptop and coffee" },
  { src: media27, alt: "Minimalist interior design" },
  { src: media35, alt: "Woman posing outdoors" },
  { src: media47, alt: "Team celebrating success" },
];

export const Profiles: ProfileSummary[] = [
  {
    imgSrc: face8,
    name: "Sarah Johnson",
    mail: "sarah.johnson@example.com",
    followers: "Follow",
    color: "primary",
    icon: "add",
  },
  {
    imgSrc: face10,
    name: "James Anderson",
    mail: "james.anderson@example.com",
    followers: "Message",
    color: "secondary",
    icon: "shared",
  },
  {
    imgSrc: face6,
    name: "Emma Thompson",
    mail: "emma.thompson@example.com",
    followers: "Follow",
    color: "success",
    icon: "add",
  },
  {
    imgSrc: face13,
    name: "Olivia Martin",
    mail: "olivia.martin@example.com",
    followers: "Follow",
    color: "info",
    icon: "add",
  },
  {
    imgSrc: face14,
    name: "Noah Williams",
    mail: "noah.williams@example.com",
    followers: "Message",
    color: "warning",
    icon: "shared",
  },
  {
    imgSrc: face3,
    name: "Amelia Brown",
    mail: "amelia.brown@example.com",
    followers: "Follow",
    color: "danger",
    icon: "add",
  },
];

export const FriendsList: Friend[] = [
  {
    imgSrc: face12,
    name: "Tom Phillip",
    mail: "tom.phillip@example.com",
  },
  {
    imgSrc: face4,
    name: "Emily Smith",
    mail: "emily.smith@example.com",
  },
  {
    imgSrc: face9,
    name: "Michael Carter",
    mail: "michael.carter@example.com",
  },
  {
    imgSrc: face2,
    name: "Sophia Turner",
    mail: "sophia.turner@example.com",
  },
  {
    imgSrc: face7,
    name: "Liam Johnson",
    mail: "liam.johnson@example.com",
  },
  {
    imgSrc: face5,
    name: "Isabella Lee",
    mail: "isabella.lee@example.com",
  },
  {
    imgSrc: face11,
    name: "Benjamin Clark",
    mail: "ben.clark@example.com",
  },
  {
    imgSrc: face15,
    name: "Grace Walker",
    mail: "grace.walker@example.com",
  },
];

export const ProfileGallery: FC = () => (
  <Fragment>
    <Row className="g-3">
      {galleryImages.map(({ src, alt }, index) => (
        <Col lg={4} sm={6} key={index}>
          <div className="profile-gallery-card rounded-3 overflow-hidden">
            <Image src={src} alt={alt} className="w-100 h-100 object-fit-cover" />
          </div>
        </Col>
      ))}
    </Row>
  </Fragment>
);


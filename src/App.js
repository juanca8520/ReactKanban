import React from 'react';
import './App.css';
import { Container, Row, Col, Button, ListGroup, Media, ButtonToolbar } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';




class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Inicio"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Explorar"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Notificaciones"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Mensajes"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Guardados"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Listas"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Perfil"
        },
        {
          "image": "http://dummyimage.com/50x50.jpg/ff4444/ffffff",
          "text": "Más opciones"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.menu.map((e, i) => <MenuElement key={i} element={e} />)}
        </ListGroup>
      </div>
    )
  }
}

function MenuElement(props) {
  return (
    <div className="menuText">
      <Row>
        <Col>
          <Media>
            <Media object data-src={props.element.image} alt="Generic placeholder image" />
          </Media>
        </Col>
        <Col>
          {props.element.text}
        </Col>
      </Row>


      {props.element.text}
    </div>
  )
}

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Ellen", "last_name": "Winkworth", "nick": "@ewinkworth0", "date": "2018-12-13 06:19:02", "content": "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus", "retweets": 15, "favs": 14 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Brandais", "last_name": "Hubbock", "nick": "@bhubbock1", "date": "2019-02-15 11:00:18", "content": "augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id", "retweets": 41, "favs": 6 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Shanie", "last_name": "McLurg", "nick": "@smclurg2", "date": "2019-06-17 06:45:54", "content": "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique", "retweets": 17, "favs": 100 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Nester", "last_name": "Stuer", "nick": "@nstuer3", "date": "2019-04-03 04:22:57", "content": "augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec", "retweets": 41, "favs": 8 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Kinny", "last_name": "Leupoldt", "nick": "@kleupoldt4", "date": "2018-11-15 11:14:00", "content": "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer", "retweets": 41, "favs": 49 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Rouvin", "last_name": "Delcastel", "nick": "@rdelcastel5", "date": "2019-03-24 17:01:56", "content": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac", "retweets": 38, "favs": 68 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Micky", "last_name": "Benoix", "nick": "@mbenoix6", "date": "2019-03-10 21:54:15", "content": "nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae", "retweets": 35, "favs": 41 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Sheela", "last_name": "Murdy", "nick": "@smurdy7", "date": "2019-02-12 01:53:23", "content": "leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius", "retweets": 1, "favs": 47 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Robinett", "last_name": "Pithie", "nick": "@rpithie8", "date": "2018-10-13 03:04:15", "content": "sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in", "retweets": 41, "favs": 96 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Reggi", "last_name": "Jefferd", "nick": "@rjefferd9", "date": "2018-09-19 06:55:51", "content": "laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus", "retweets": 7, "favs": 72 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Lizzie", "last_name": "Serjent", "nick": "@lserjenta", "date": "2019-02-07 12:53:48", "content": "faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel", "retweets": 92, "favs": 91 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Gussy", "last_name": "Licciardello", "nick": "@glicciardellob", "date": "2019-09-08 22:07:29", "content": "enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor", "retweets": 21, "favs": 60 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Bron", "last_name": "Godly", "nick": "@bgodlyc", "date": "2018-10-28 17:12:09", "content": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed", "retweets": 36, "favs": 88 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Danielle", "last_name": "Aveson", "nick": "@davesond", "date": "2019-03-18 08:41:24", "content": "donec ut mauris eget massa tempor convallis nulla neque libero convallis", "retweets": 39, "favs": 4 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Hieronymus", "last_name": "Shakle", "nick": "@hshaklee", "date": "2019-08-21 03:29:47", "content": "sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis", "retweets": 59, "favs": 52 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Joey", "last_name": "Doughill", "nick": "@jdoughillf", "date": "2019-07-06 13:03:14", "content": "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel", "retweets": 22, "favs": 99 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Gage", "last_name": "Jordeson", "nick": "@gjordesong", "date": "2018-10-16 22:09:17", "content": "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia", "retweets": 52, "favs": 100 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Roxie", "last_name": "Sheeres", "nick": "@rsheeresh", "date": "2019-02-16 19:34:19", "content": "natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue", "retweets": 52, "favs": 99 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Eudora", "last_name": "Duny", "nick": "@edunyi", "date": "2019-06-05 03:40:46", "content": "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices", "retweets": 38, "favs": 65 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Nathan", "last_name": "Pearl", "nick": "@npearlj", "date": "2018-10-08 10:23:41", "content": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in", "retweets": 15, "favs": 56 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Vasilis", "last_name": "Cooke", "nick": "@vcookek", "date": "2018-10-26 14:38:33", "content": "ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices", "retweets": 56, "favs": 91 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Merridie", "last_name": "Berkery", "nick": "@mberkeryl", "date": "2019-08-24 14:52:41", "content": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc", "retweets": 89, "favs": 27 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Elfreda", "last_name": "Stockall", "nick": "@estockallm", "date": "2019-08-05 19:30:15", "content": "consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non", "retweets": 23, "favs": 22 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Osborne", "last_name": "Swinfon", "nick": "@oswinfonn", "date": "2019-04-20 13:24:58", "content": "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante", "retweets": 49, "favs": 28 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Ky", "last_name": "Paik", "nick": "@kpaiko", "date": "2019-02-24 07:44:14", "content": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia", "retweets": 79, "favs": 47 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Ogdan", "last_name": "Fillingham", "nick": "@ofillinghamp", "date": "2018-11-19 03:05:09", "content": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus", "retweets": 3, "favs": 81 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Haydon", "last_name": "Stiegars", "nick": "@hstiegarsq", "date": "2019-03-30 10:37:29", "content": "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh", "retweets": 78, "favs": 84 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Brigida", "last_name": "Dray", "nick": "@bdrayr", "date": "2019-03-07 17:16:25", "content": "volutpat erat quisque erat eros viverra eget congue eget semper", "retweets": 55, "favs": 10 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Curr", "last_name": "Glennard", "nick": "@cglennards", "date": "2019-07-03 01:00:56", "content": "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim", "retweets": 54, "favs": 40 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Justin", "last_name": "Mawd", "nick": "@jmawdt", "date": "2019-06-09 16:17:10", "content": "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros", "retweets": 8, "favs": 31 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Mercedes", "last_name": "Darko", "nick": "@mdarkou", "date": "2019-04-28 15:12:12", "content": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia", "retweets": 67, "favs": 16 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Inez", "last_name": "Reside", "nick": "@iresidev", "date": "2019-06-01 20:15:50", "content": "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed", "retweets": 46, "favs": 98 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Claiborn", "last_name": "Vakhonin", "nick": "@cvakhoninw", "date": "2018-11-28 03:41:04", "content": "diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue", "retweets": 45, "favs": 93 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Alfonso", "last_name": "Bitcheno", "nick": "@abitchenox", "date": "2019-06-23 04:42:34", "content": "erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis", "retweets": 97, "favs": 37 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Pollyanna", "last_name": "Stancer", "nick": "@pstancery", "date": "2019-03-22 14:00:16", "content": "varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at", "retweets": 45, "favs": 53 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Annemarie", "last_name": "Fairbrace", "nick": "@afairbracez", "date": "2019-04-01 13:23:19", "content": "dapibus duis at velit eu est congue elementum in hac habitasse", "retweets": 18, "favs": 56 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Chickie", "last_name": "Ralls", "nick": "@cralls10", "date": "2019-06-23 16:57:34", "content": "sapien a libero nam dui proin leo odio porttitor id consequat", "retweets": 82, "favs": 29 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Enrique", "last_name": "Greenalf", "nick": "@egreenalf11", "date": "2019-05-14 23:41:47", "content": "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus", "retweets": 19, "favs": 40 },
        { "avatar": "http://dummyimage.com/50x50.jpg/cc0000/ffffff", "first_name": "Hernando", "last_name": "Leighfield", "nick": "@hleighfield12", "date": "2019-07-06 06:00:51", "content": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus", "retweets": 84, "favs": 56 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Ara", "last_name": "Bolger", "nick": "@abolger13", "date": "2019-07-21 04:27:49", "content": "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis", "retweets": 57, "favs": 75 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Uta", "last_name": "O'Fallowne", "nick": "@uofallowne14", "date": "2019-08-02 07:05:09", "content": "erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in", "retweets": 97, "favs": 74 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Gwyneth", "last_name": "Darben", "nick": "@gdarben15", "date": "2019-04-05 08:59:14", "content": "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum", "retweets": 57, "favs": 45 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Courtnay", "last_name": "Barrat", "nick": "@cbarrat16", "date": "2018-11-23 14:28:21", "content": "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer", "retweets": 19, "favs": 50 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Andie", "last_name": "Edmonston", "nick": "@aedmonston17", "date": "2019-07-14 12:17:28", "content": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat", "retweets": 73, "favs": 61 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Fina", "last_name": "Graine", "nick": "@fgraine18", "date": "2019-04-07 04:35:19", "content": "congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis", "retweets": 46, "favs": 44 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Franky", "last_name": "Sambals", "nick": "@fsambals19", "date": "2019-05-08 06:34:31", "content": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida", "retweets": 47, "favs": 93 },
        { "avatar": "http://dummyimage.com/50x50.jpg/dddddd/000000", "first_name": "Annis", "last_name": "Predohl", "nick": "@apredohl1a", "date": "2018-10-30 21:52:34", "content": "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius", "retweets": 31, "favs": 97 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Morena", "last_name": "Gordon", "nick": "@mgordon1b", "date": "2019-07-15 02:48:40", "content": "semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique", "retweets": 77, "favs": 5 },
        { "avatar": "http://dummyimage.com/50x50.jpg/ff4444/ffffff", "first_name": "Alley", "last_name": "McKeggie", "nick": "@amckeggie1c", "date": "2019-02-09 03:42:54", "content": "etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna", "retweets": 17, "favs": 65 },
        { "avatar": "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff", "first_name": "Peg", "last_name": "Hinkley", "nick": "@phinkley1d", "date": "2019-05-25 01:34:19", "content": "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et", "retweets": 47, "favs": 72 }
      ]
    }
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.tweets.map((e, i) => <Tweet key={i} element={e} />)}
        </ListGroup>
      </div>
    )
  }
}

function Tweet(props) {
  return (
    <div className="tweet">
      <Row>
        <Col>
          <Media>
            <Media object data-src={props.element.avatar} alt="Generic placeholder image" />
          </Media>
        </Col>
        <Col>
          <Row>
            <p className="tweetName">
              {props.element.first_name} {props.element.last_name} {props.element.nick} - {props.element.date}
            </p>
          </Row>
          <Row>
            <p>
              {props.element.content}
            </p>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="TweetButtons">
            <Button variant="primary">Favs</Button> {props.element.favs}
            <Button variant="primary">Retweets</Button> {props.element.retweets}
          </div>
        </Col>
      </Row>
    </div>
  )
}

function Search() {
  return (
    <div>
      <input placeholder="Buscar en Twitter" />
    </div>
  )
}


class ColDer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Search />
        </Row>
        <Row>

        </Row>
        <Row>

        </Row>
        <Row>

        </Row>
      </div>
    )
  }
}

function App() {
  return (
    <div className="title">
      <Container>
        <Row>
          <Col>
            <Menu />
          </Col>
          <Col xs={6}>
            <Tweets />
          </Col>
          <Col>
            <ColDer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

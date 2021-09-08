import React from 'react';
import * as firebase from "firebase/app";
import { Firestore} from '@firebase/firestore';
import 'firebase/auth'
import './main-view.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LogoView } from '../logo-view/logo-view';
import { NavigationView } from '../navigation-view/navigation-view';
import { ImageSlideView } from '../imageslide-view/imageslide-view';
<<<<<<< Updated upstream
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
=======

>>>>>>> Stashed changes

const firebaseConfig = {
  apiKey: "AIzaSyBBgAzuBjkjql4n5NpORB2ACC4yX5agEO4",
  authDomain: "anonymous-da3b5.firebaseapp.com",
  projectId: "anonymous-da3b5",
  storageBucket: "anonymous-da3b5.appspot.com",
  messagingSenderId: "1049067056124",
  appId: "1:1049067056124:web:eaf8db415d82e8a069a079",
  measurementId: "G-WC8RFHKR2V"
};
console.log('hi')
export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
<<<<<<< Updated upstream
          art: ''
        }
=======
          items: [],
        }

        const config = {
          apiKey: "AIzaSyBBgAzuBjkjql4n5NpORB2ACC4yX5agEO4",
          authDomain: "anonymous-da3b5.firebaseapp.com",
          projectId: "anonymous-da3b5",
          storageBucket: "anonymous-da3b5.appspot.com",
          messagingSenderId: "1049067056124",
          appId: "1:1049067056124:web:b1a19a55ffe9da1a69a079",
          measurementId: "G-E1S6WBS8RV"
        }

        if (!firebase.apps.length){
          firebase.initializeApp(config);
          }



>>>>>>> Stashed changes
    }


    componentDidMount() {
<<<<<<< Updated upstream
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      async function getData(db) {
        const anonymousCol = collection(db, 'anonymous');
        const anonymousSnapshot = await getDocs(anonymousCol);
        const dataList = anonymousSnapshot.docs.map(doc => doc.data());
        this.setState({
          art: dataList
        });
=======
      this.getData();
        firebase.auth().signInAnonymously();

      console.log(this.state.items)
      };

      componentWillUnmount() {
        firebase.auth = () => {}
     };

      getData() {
        firebase.firestore().collection('anonymous').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            let item = doc.data();
            this.setState({ items : item })
          })
        })
>>>>>>> Stashed changes
      }
      }



    render () {
        return (
        <Router>
        <div>
            <Route exact path="/">
            <LogoView />
                <div className="start">
            <NavigationView />
<<<<<<< Updated upstream
            <ImageSlideView />
=======
            <ImageSlideView art={this.state.items}/>
>>>>>>> Stashed changes
                </div>
            </Route>

            <Route exact path="/artist">
            <LogoView />
            <div className="start">
            <NavigationView />
            </div>
            </Route>
        </div>
        </Router>
            
        );
    }
}
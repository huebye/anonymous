import React from 'react';
import './main-view.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LogoView } from '../logo-view/logo-view';
import { NavigationView } from '../navigation-view/navigation-view';
import { ImageSlideView } from '../imageslide-view/imageslide-view';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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
          art: ''
        }
    }


    componentDidMount() {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      async function getData(db) {
        const anonymousCol = collection(db, 'anonymous');
        const anonymousSnapshot = await getDocs(anonymousCol);
        const dataList = anonymousSnapshot.docs.map(doc => doc.data());
        this.setState({
          art: dataList
        });
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
            <ImageSlideView />
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
'use client';

import { profileData } from '@/data/profile';
import { useEffect } from 'react';

export default function useFunnyLog() {
  useEffect(() => {
    console.log(`
                            Z                  
                          ZHAZ                 
                         ZHAZHA                
ZHAZHAZHAZHAZHAZHAZHAZHAZHAZH   Z              
  ZHAZHAZHAZHAZHAZHAZHAZHAZH   ZHAZ            
                    ZHAZHA   ZHAZHAZ           
                   ZHAZHA   ZHAZHAZHAZ         
                 ZHAZHA   ZHAZHA  ZHAZHA       
                ZHAZHAZHAZHAZHAZHAZHAZHAZ      
              ZHAZHAZHAZHAZHAZHAZHAZHAZHAZ     
             ZHAZHA   ZHAZHA          ZHAZHA   
            ZHAZH   ZHAZHA             ZHAZHA  
              ZH   ZHAZHA                ZHAZHA


Hi there! 👋 
Ever wondered how this website works?

If you're curious and want to see the code,
it's right here: https://github.com/dev-zha/dev-zha.github.io.
Feel free to take a look!

Want to chat or just say hello?
Drop me an email at ${profileData.email}. ✨😊`);
  }, []);
}

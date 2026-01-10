import React from 'react';
import ProfileCard from '../ProfileCard';
import urusImg from '../assets/images/Urus.png'; 
import Lamborfhini from '../assets/images/Audi1.jpg';

export default function LamborghiniPage() {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
          backgroundColor: 'black',
          color: '#FFD700',
          padding: '0 20px',
        }}
      >
        <span
          style={{ fontSize: '1.5em', cursor: 'pointer' }}
          onClick={() => window.history.back()}
        >
          Back
        </span>

        <span
          style={{
            fontSize: '2em',
            flex: 1,
            textAlign: 'center',
          }}
        >
          Audi
        </span>
      </header>

      <div
        style={{
          border: '3px solid #FFD700',
          padding: '10px',
        }}
      >
        <div
          style={{
            width: '50%',
            display: 'inline-block',
            verticalAlign: 'top',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        >
          The Audi name comes from founder August Horch; he founded Audi in 1909 after leaving his first company, translating "Horch" (listen) into Latin as "Audi". In 1932, Audi merged with Horch, DKW, and Wanderer to form Auto Union, creating the iconic four interlocking rings logo symbolizing their union.
        </div>

        <div
          style={{
            paddingTop:'10px',
            width: '61px',
            display: 'inline-block',
            textAlign: 'center',
            backgroundColor: '#0F0F0F',
            border: '1px solid #FFD700',
          }}
        >
          <img
            src={Lamborfhini}
            alt="Lamborghini logo"
            style={{ Width: '175px', height: '100px' }}
          />
        </div>
      </div>
      <div className="bg-neutral-900"> 
       <div className="flex flex-col md:flex-row gap-8 p-6" >

      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-6">
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      /> </div>
      <div className="flex flex-col md:flex-row gap-8 p-6">
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
      <ProfileCard
        image={urusImg}
        name="Urus"
        TopSpeed="305 km/h (190 mph)"
        Engine={`Urus: V8 4.0-litre twin turbo
Urus SE: V8 4.0-litre twin turbo with electric motor`}
      />
    </div>
    </div>
    </div>
    
  );
}

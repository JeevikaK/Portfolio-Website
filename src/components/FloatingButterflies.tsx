import butterfly1 from "@/assets/butterfly1.png";
import butterfly2 from "@/assets/butterfly2.png";
import butterfly3 from "@/assets/butterfly3.png";

const FloatingButterflies = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Butterfly 1 - Large floating */}
      <div
        className="absolute animate-float-1"
        style={{ 
          top: '20%', 
          left: '10%',
          animationDelay: '0s'
        }}
      >
        <img
          src={butterfly1}
          alt=""
          className="w-12 h-12 animate-wing-flap"
          style={{ animationDelay: '0.1s' }}
        />
      </div>
      
      {/* Butterfly 2 - Medium floating */}
      <div
        className="absolute animate-float-2"
        style={{ 
          top: '60%', 
          right: '15%',
          animationDelay: '3s'
        }}
      >
        <img
          src={butterfly2}
          alt=""
          className="w-10 h-10 animate-wing-flap"
          style={{ animationDelay: '0.2s' }}
        />
      </div>
      
      {/* Butterfly 3 - Small floating */}
      <div
        className="absolute animate-float-3"
        style={{ 
          top: '40%', 
          left: '80%',
          animationDelay: '6s'
        }}
      >
        <img
          src={butterfly3}
          alt=""
          className="w-8 h-8 animate-wing-flap"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
      
      {/* Additional butterflies for more life */}
      <div
        className="absolute animate-float-2"
        style={{ 
          top: '15%', 
          right: '25%',
          animationDelay: '9s'
        }}
      >
        <img
          src={butterfly1}
          alt=""
          className="w-7 h-7 animate-wing-flap"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
      
      <div
        className="absolute animate-float-1"
        style={{ 
          bottom: '30%', 
          left: '20%',
          animationDelay: '2s'
        }}
      >
        <img
          src={butterfly3}
          alt=""
          className="w-9 h-9 animate-wing-flap"
          style={{ animationDelay: '0.1s' }}
        />
      </div>
      
      <div
        className="absolute animate-float-3"
        style={{ 
          bottom: '20%', 
          right: '30%',
          animationDelay: '5s'
        }}
      >
        <img
          src={butterfly2}
          alt=""
          className="w-11 h-11 animate-wing-flap"
          style={{ animationDelay: '0.2s' }}
        />
      </div>

      {/* Extra butterflies for more natural feel */}
      <div
        className="absolute animate-float-2"
        style={{ 
          top: '35%', 
          left: '45%',
          animationDelay: '7s'
        }}
      >
        <img
          src={butterfly1}
          alt=""
          className="w-6 h-6 animate-wing-flap"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
      
      <div
        className="absolute animate-float-1"
        style={{ 
          bottom: '45%', 
          right: '60%',
          animationDelay: '4s'
        }}
      >
        <img
          src={butterfly3}
          alt=""
          className="w-8 h-8 animate-wing-flap"
          style={{ animationDelay: '0.1s' }}
        />
      </div>
    </div>
  );
};

export default FloatingButterflies;
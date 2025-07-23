import butterfly1 from "@/assets/butterfly1.png";
import butterfly2 from "@/assets/butterfly2.png";
import butterfly3 from "@/assets/butterfly3.png";

const FloatingButterflies = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Butterfly 1 */}
      <img
        src={butterfly1}
        alt=""
        className="absolute w-8 h-8 animate-float-1"
        style={{ 
          top: '20%', 
          left: '10%',
          animationDelay: '0s'
        }}
      />
      
      {/* Butterfly 2 */}
      <img
        src={butterfly2}
        alt=""
        className="absolute w-6 h-6 animate-float-2"
        style={{ 
          top: '60%', 
          right: '15%',
          animationDelay: '2s'
        }}
      />
      
      {/* Butterfly 3 */}
      <img
        src={butterfly3}
        alt=""
        className="absolute w-7 h-7 animate-float-3"
        style={{ 
          top: '40%', 
          left: '80%',
          animationDelay: '4s'
        }}
      />
      
      {/* Additional butterflies for more movement */}
      <img
        src={butterfly1}
        alt=""
        className="absolute w-5 h-5 animate-float-2"
        style={{ 
          top: '15%', 
          right: '25%',
          animationDelay: '6s'
        }}
      />
      
      <img
        src={butterfly3}
        alt=""
        className="absolute w-6 h-6 animate-float-1"
        style={{ 
          bottom: '30%', 
          left: '20%',
          animationDelay: '1s'
        }}
      />
      
      <img
        src={butterfly2}
        alt=""
        className="absolute w-7 h-7 animate-float-3"
        style={{ 
          bottom: '20%', 
          right: '30%',
          animationDelay: '3s'
        }}
      />
    </div>
  );
};

export default FloatingButterflies;
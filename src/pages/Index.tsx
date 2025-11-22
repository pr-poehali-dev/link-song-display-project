import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setHasEntered(true);
    
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.currentTime = 12;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error('Audio playback failed:', error);
        });
      }
    }, 100);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="w-20 h-20 mx-auto bg-destructive/20 rounded-full flex items-center justify-center">
              <Icon name="AlertTriangle" size={40} className="text-destructive" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Предупреждение
            </h1>
            
            <div className="space-y-3 text-muted-foreground text-lg">
              <p>
                Данный сайт содержит контент для взрослых
              </p>
              <p className="text-destructive font-semibold">
                18+
              </p>
              <p className="text-sm">
                Входя на сайт, вы подтверждаете, что вам исполнилось 18 лет
              </p>
            </div>
          </div>

          <Button
            onClick={handleEnter}
            size="lg"
            className="w-full max-w-xs mx-auto text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Мне есть 18 лет
          </Button>

          <p className="text-xs text-muted-foreground/60">
            Нажимая кнопку, вы соглашаетесь с условиями использования
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <audio
        ref={audioRef}
        src="https://cdns-preview-a.dzcdn.net/stream/c-a66c4daa867b1e4b58f8adea6cd25cf3-2.mp3"
        loop
      />

      <div 
        className="absolute inset-0 animate-fade-in"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/9466c77b-26b9-4993-b0ee-fa97d0a7e257/files/4234cdf2-7b6e-43e3-b083-4577540fa9ef.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <button
        onClick={toggleAudio}
        className="absolute bottom-1/2 right-8 translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
        aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
      >
        <Icon 
          name={isPlaying ? 'Pause' : 'Play'} 
          size={28} 
          className="text-white group-hover:scale-110 transition-transform"
        />
      </button>

      <div className="absolute top-8 left-8 text-white/80 text-sm backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full">
        ARLEKIN 40 000 × DATA404 – Hopelessness
      </div>
    </div>
  );
};

export default Index;
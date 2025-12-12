import { Shield, CheckCircle, Heart } from 'lucide-react';
export function TrustBadges() {
  return <section className="py-8 px-8 border-t border-gray-100">
      <div className="flex justify-between">
        <div className="flex flex-col items-center gap-2">
          <Shield size={20} strokeWidth={1} className="text-[#2d5016]" />
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Secure
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CheckCircle size={20} strokeWidth={1} className="text-[#2d5016]" />
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Verified
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Heart size={20} strokeWidth={1} className="text-[#2d5016]" />
          <span className="text-[10px] uppercase tracking-widest text-gray-500">
            Trusted
          </span>
        </div>
      </div>
    </section>;
}
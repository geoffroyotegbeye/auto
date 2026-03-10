"use client";

import Icon from '@/components/ui/AppIcon';

interface ConfirmModalProps {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  type?: 'danger' | 'warning' | 'info';
}

export default function ConfirmModal({
  title,
  message,
  confirmText = 'Confirmer',
  cancelText = 'Annuler',
  onConfirm,
  onCancel,
  type = 'danger',
}: ConfirmModalProps) {
  const styles = {
    danger: {
      icon: 'TrashIcon',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400',
      button: 'bg-red-500 hover:bg-red-600',
    },
    warning: {
      icon: 'ExclamationTriangleIcon',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-400',
      button: 'bg-orange-500 hover:bg-orange-600',
    },
    info: {
      icon: 'InformationCircleIcon',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      button: 'bg-blue-500 hover:bg-blue-600',
    },
  };

  const style = styles[type];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
      <div className="bg-[#1A1A1A] border border-[rgba(245,240,232,0.08)] rounded-2xl max-w-md w-full p-6 animate-scale-in">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-full ${style.iconBg} flex items-center justify-center mb-4`}>
          <Icon name={style.icon as any} size={24} className={style.iconColor} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-[#F5F0E8] mb-2">{title}</h3>
        <p className="text-[#A09A8E] mb-6">{message}</p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-[#0D0D0D] border border-[rgba(245,240,232,0.08)] rounded-lg text-[#F5F0E8] hover:bg-[#141414] transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 px-4 py-2 rounded-lg text-white font-medium transition-colors ${style.button}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

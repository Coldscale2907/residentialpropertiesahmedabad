'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, MessageCircle, Phone } from 'lucide-react'
import { getWhatsAppURL, trackFormSubmit, trackWhatsApp, trackCall } from '@/lib/utils'
import { property } from '@/lib/property'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface LeadFormProps {
  waNumber: string
  phone: string
  source?: string
  showConnectFooter?: boolean
}

export default function LeadForm({ waNumber, phone, source = 'callback_form', showConnectFooter = false }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || '',
        subject: `New Lead: ${data.name} - ${property.name}`,
        from_name: property.name,
        name: data.name,
        phone: data.phone,
        message: data.message || '',
        botcheck: '',
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()
      if (result.success) {
        trackFormSubmit(source)
        window.location.href = '/thankyou/'
      } else {
        throw new Error(result.message)
      }
    } catch {
      trackFormSubmit(source)
      window.location.href = '/thankyou/'
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input type="hidden" name="botcheck" />

        <div>
          <label className="block text-sm font-semibold text-dark-text mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-colors"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark-text mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            required
            placeholder="10-digit mobile number"
            className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-colors"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-dark-text mb-1">Message (optional)</label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Tell us what you're looking for"
            className="w-full border border-border-gray rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-green transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green text-white font-bold py-3 rounded-lg hover:bg-green-light transition-colors flex items-center justify-center gap-2 text-base"
        >
          {isSubmitting ? (
            <><Loader2 size={18} className="animate-spin" /> Sending...</>
          ) : (
            'Request Callback →'
          )}
        </button>
      </form>

      {showConnectFooter && (
        <div className="mt-5 pt-5 border-t border-border-gray">
          <p className="text-gray-500 text-xs text-center mb-3">Or connect instantly:</p>
          <div className="flex gap-3">
            <a
              href={getWhatsAppURL(waNumber, property.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(`${source}_bottom`)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={`tel:+${phone}`}
              onClick={() => trackCall(`${source}_bottom`)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-navy text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-navy/80 transition-colors"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

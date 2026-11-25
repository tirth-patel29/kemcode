import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown, Send } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { Reveal, SectionHeading } from '@/components/ui';

type FormState = {
  fullName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
};

const EMPTY: FormState = {
  fullName: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  description: '',
};

const BUDGETS = ['Under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2,00,000', '₹2,00,000+'];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[13px] text-red-600">{message}</p>;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.service) next.service = 'Please choose the service you need.';
    if (form.description.trim().length < 20) {
      next.description = 'Please describe your project in at least 20 characters.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Frontend only for now: ready to POST to a backend endpoint later.
    setSubmitted(true);
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-paper px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-mute/60 outline-none transition-colors focus:border-ink ${
      hasError ? 'border-red-400' : 'border-paper-line'
    }`;

  return (
    <div className="pt-28 sm:pt-36">
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Contact" className="[&>div]:flex [&>div]:justify-center [&_h2]:mx-auto [&_h2]:text-center">
          HAVE A PROJECT IN MIND?
        </SectionHeading>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-mute">
            Tell us what you&rsquo;re planning. Let&rsquo;s discuss how KEMCODE can help turn your
            idea into reality.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-paper-line bg-paper-sand p-7 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center py-10 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-tint">
                  <Check className="h-7 w-7 text-accent" />
                </span>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-ink">
                  Thank you, {form.fullName.trim().split(' ')[0]}.
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-ink-mute">
                  Your enquiry has been recorded. Tirth and Het will get back to you about your{' '}
                  {form.service.toLowerCase()} project.
                </p>
                <button
                  onClick={() => {
                    setForm(EMPTY);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-full border border-paper-line bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-medium text-ink">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={set('fullName')}
                      placeholder="Your name"
                      className={`mt-2 ${inputClass(!!errors.fullName)}`}
                    />
                    <FieldError message={errors.fullName} />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="you@example.com"
                      className={`mt-2 ${inputClass(!!errors.email)}`}
                    />
                    <FieldError message={errors.email} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-ink">
                      Company or business name <span className="text-ink-mute">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={set('company')}
                      placeholder="Your business"
                      className={`mt-2 ${inputClass(false)}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="text-sm font-medium text-ink">
                      Estimated budget <span className="text-ink-mute">(optional)</span>
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="budget"
                        value={form.budget}
                        onChange={set('budget')}
                        className={`${inputClass(false)} appearance-none pr-10 ${form.budget ? '' : 'text-ink-mute/60'}`}
                      >
                        <option value="">Select a range</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="text-sm font-medium text-ink">
                    Service required
                  </label>
                  <div className="relative mt-2">
                    <select
                      id="service"
                      value={form.service}
                      onChange={set('service')}
                      className={`${inputClass(!!errors.service)} appearance-none pr-10 ${form.service ? '' : 'text-ink-mute/60'}`}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.name} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute" />
                  </div>
                  <FieldError message={errors.service} />
                </div>

                <div>
                  <label htmlFor="description" className="text-sm font-medium text-ink">
                    Project description
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    value={form.description}
                    onChange={set('description')}
                    placeholder="What are you planning? What problem should we solve?"
                    className={`mt-2 resize-none ${inputClass(!!errors.description)}`}
                  />
                  <FieldError message={errors.description} />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-ink-soft sm:w-auto"
                >
                  Send Enquiry
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

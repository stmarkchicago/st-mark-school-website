import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Calendar, FileText, DollarSign, MessageSquare, Bell, BookOpen, Users, Download } from 'lucide-react';

const ParentPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ backgroundColor: '#FCFBF7', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #123EAB 0%, #0B2A6F 100%)',
        color: '#F7F3EA',
        padding: '80px 24px 60px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontFamily: 'var(--heading-font)', 
            fontSize: '48px', 
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            Parent Portal
          </h1>
          <p style={{ 
            fontFamily: 'var(--body-font)', 
            fontSize: '20px',
            color: '#DDF6FF',
            lineHeight: '1.6'
          }}>
            Access important information, stay connected with your child's education, and communicate with our staff.
          </p>
        </div>
      </section>

      {/* Login/Portal Access Section */}
      <section style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Login Card */}
          <Card>
            <CardHeader>
              <CardTitle style={{ fontFamily: 'var(--heading-font)', fontSize: '28px', color: '#123EAB' }}>
                Portal Login
              </CardTitle>
              <CardDescription>
                Access your family's account to view grades, attendance, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="parent@example.com"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" style={{ color: '#123EAB', textDecoration: 'none' }}>Forgot password?</a>
                </div>
                <Button 
                  type="submit" 
                  style={{ 
                    width: '100%', 
                    padding: '12px',
                    backgroundColor: '#123EAB',
                    color: '#F7F3EA'
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #D8D2C4' }}>
                <p style={{ fontSize: '14px', color: '#7d797a', marginBottom: '12px' }}>
                  Don't have an account yet?
                </p>
                <Button 
                  variant="outline" 
                  style={{ width: '100%', borderColor: '#123EAB', color: '#123EAB' }}
                >
                  Request Portal Access
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'var(--heading-font)', fontSize: '24px', color: '#123EAB' }}>
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: '#F8F8F8', borderRadius: '8px' }}>
                  <h4 style={{ fontFamily: 'var(--heading-font)', fontSize: '16px', marginBottom: '8px', color: '#26303D' }}>
                    First Time Logging In?
                  </h4>
                  <p style={{ fontSize: '14px', color: '#7d797a', marginBottom: '12px', lineHeight: '1.6' }}>
                    New families receive login credentials via email within 24 hours of enrollment confirmation.
                  </p>
                  <a href="mailto:info@stmarkchristian.school" style={{ color: '#123EAB', fontSize: '14px', textDecoration: 'none', fontWeight: '600' }}>
                    Contact Support →
                  </a>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#F8F8F8', borderRadius: '8px' }}>
                  <h4 style={{ fontFamily: 'var(--heading-font)', fontSize: '16px', marginBottom: '8px', color: '#26303D' }}>
                    Technical Issues?
                  </h4>
                  <p style={{ fontSize: '14px', color: '#7d797a', marginBottom: '12px', lineHeight: '1.6' }}>
                    Call our office at (630) 986-1100 for immediate assistance with portal access.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'var(--heading-font)', fontSize: '24px', color: '#123EAB' }}>
                  Portal Resources
                </CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="#" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px',
                    backgroundColor: '#FCFBF7',
                    border: '1px solid #D8D2C4',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: '#26303D',
                    transition: 'all 0.2s'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8F8F8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FCFBF7'}
                >
                  <Download size={20} color="#123EAB" />
                  <span style={{ fontSize: '14px' }}>Portal User Guide (PDF)</span>
                </a>
                <a 
                  href="#" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    padding: '12px',
                    backgroundColor: '#FCFBF7',
                    border: '1px solid #D8D2C4',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    color: '#26303D',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8F8F8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FCFBF7'}
                >
                  <FileText size={20} color="#123EAB" />
                  <span style={{ fontSize: '14px' }}>Parent Handbook</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portal Features Section */}
      <section style={{ backgroundColor: '#F8F8F8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontFamily: 'var(--heading-font)', 
              fontSize: '40px', 
              color: '#123EAB',
              marginBottom: '16px'
            }}>
              What You Can Access
            </h2>
            <p style={{ 
              fontFamily: 'var(--body-font)', 
              fontSize: '18px',
              color: '#7d797a',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Our Parent Portal provides everything you need to stay connected with your child's education and school community.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px'
          }}>
            {/* Feature Cards */}
            {[
              {
                icon: <BookOpen size={32} />,
                title: 'Academic Progress',
                description: 'View grades, assignments, and progress reports in real-time.'
              },
              {
                icon: <Calendar size={32} />,
                title: 'School Calendar',
                description: 'Access important dates, events, and schedule changes.'
              },
              {
                icon: <FileText size={32} />,
                title: 'Documents & Forms',
                description: 'Download permission slips, handbooks, and important documents.'
              },
              {
                icon: <DollarSign size={32} />,
                title: 'Tuition & Billing',
                description: 'View statements, make payments, and manage your account.'
              },
              {
                icon: <MessageSquare size={32} />,
                title: 'Direct Messaging',
                description: 'Communicate securely with teachers and staff.'
              },
              {
                icon: <Bell size={32} />,
                title: 'Attendance & Alerts',
                description: 'Receive attendance notifications and important announcements.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#FCFBF7',
                  padding: '32px',
                  borderRadius: '8px',
                  border: '1px solid #D8D2C4',
                  textAlign: 'center'
                }}
              >
                <div style={{ color: '#123EAB', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--heading-font)', 
                  fontSize: '20px',
                  color: '#26303D',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--body-font)', 
                  fontSize: '15px',
                  color: '#7d797a',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ 
          fontFamily: 'var(--heading-font)', 
          fontSize: '40px', 
          color: '#123EAB',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            {
              question: 'How do I get my login credentials?',
              answer: 'Login credentials are sent via email within 24 hours of enrollment confirmation. If you haven\'t received your credentials, please contact our office at (630) 986-1100 or info@stmarkchristian.school.'
            },
            {
              question: 'Can both parents access the portal?',
              answer: 'Yes! Each parent/guardian can have their own portal account with full access to their child\'s information. Simply request separate login credentials for each parent.'
            },
            {
              question: 'Is the portal mobile-friendly?',
              answer: 'Absolutely! The Parent Portal is fully responsive and works seamlessly on smartphones, tablets, and desktop computers.'
            },
            {
              question: 'How often is information updated?',
              answer: 'Teachers update grades and assignments regularly, typically within 24-48 hours of completion. Attendance is updated daily, and announcements are posted in real-time.'
            },
            {
              question: 'What if I forget my password?',
              answer: 'Click the "Forgot password?" link on the login page to reset your password. You\'ll receive a password reset email within minutes. If you need additional help, contact our office.'
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle style={{ fontFamily: 'var(--heading-font)', fontSize: '20px', color: '#26303D' }}>
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ 
                  fontFamily: 'var(--body-font)', 
                  fontSize: '16px',
                  color: '#7d797a',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section style={{ 
        backgroundColor: '#123EAB',
        padding: '60px 24px',
        textAlign: 'center',
        color: '#F7F3EA'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'var(--heading-font)', 
            fontSize: '36px',
            marginBottom: '16px'
          }}>
            Still Have Questions?
          </h2>
          <p style={{ 
            fontFamily: 'var(--body-font)', 
            fontSize: '18px',
            color: '#DDF6FF',
            marginBottom: '32px',
            lineHeight: '1.6'
          }}>
            Our office staff is here to help with any portal-related questions or technical issues.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:6309861100"
              style={{ 
                padding: '14px 32px',
                backgroundColor: '#F7F3EA',
                color: '#123EAB',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                fontFamily: 'var(--button-font)',
                fontSize: '16px'
              }}
            >
              Call (630) 986-1100
            </a>
            <a 
              href="mailto:info@stmarkchristian.school"
              style={{ 
                padding: '14px 32px',
                backgroundColor: 'transparent',
                border: '2px solid #F7F3EA',
                color: '#F7F3EA',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                fontFamily: 'var(--button-font)',
                fontSize: '16px'
              }}
            >
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentPortal;

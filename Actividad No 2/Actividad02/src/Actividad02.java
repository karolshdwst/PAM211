import javax.swing.*;
import java.awt.*;

class InicioPAM {
    public String reglamentoPOO() {
        return "1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\n" +
                "2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\n" +
                "inicio:7:00a.m y 14:00 p.m).\n" +
                "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\n" +
                "justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\n" +
                "tutor para ser validados y de forma posterior emitidos).\n" +
                "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\n" +
                "5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\n" +
                "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\n" +
                "7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\n" +
                "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\n" +
                "9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\n" +
                "una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\n" +
                "10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\n" +
                "11. Prohibido el uso de audífonos durante la clase.\n" +
                "12. Prohibido comer y/o tomar líquidos en el salón.\n" +
                "13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\n" +
                "14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\n" +
                "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\n" +
                "15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\n" +
                "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\n" +
                "17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\n" +
                "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.";
    }
    public String lineamientosClassroom() {
        return """
                1. Entregar los trabajos para su revisión\s
                2. Entregas en PDF\s
                3. Avisos de clase
                4. Entregas autorizadas con retraso 5 Calif Max\s""";
    }
    public String fechasDeParciales() {
        return """
                1er Parcial: 29-09-25\s
                2do Parcial: 03-11-25\s
                3er Parcial: 01-12-25
                """;
    }
    public String porcentajesPorParcial() {
        return """
                Primer parcial:\s
                Conocimeinto 40%\s
                Desempeño 20%\s
                Producto 30%\s
                PI 10% \n \n
                Segundo parcial:\s
                Conocimiento 40%\s
                Desempeño 20%\s
                Producto 20%\s
                PI 20% \n \n
                Tercer parcial:\s
                Conocimiento 20%\s
                Desempeño 10%\s
                Producto 40%\s
                PI 30%\s
                """;
    }
}

public class Actividad02 {
    public static void main(String[] args){

        InicioPAM materia = new InicioPAM();
        JFrame ventana = new JFrame("Actividad No. 2");
        ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        ventana.setSize(1000, 600);
        ventana.setLayout(new BorderLayout());

        JPanel panel = new JPanel();

        JTextArea textArea = new JTextArea();
        textArea.setEditable(false);
        ventana.add(new JScrollPane(textArea), BorderLayout.CENTER);

        JButton btnReglamento = new JButton("Reglamento POO");
        btnReglamento.addActionListener(e -> textArea.setText(materia.reglamentoPOO()));
        panel.add(btnReglamento);

        JButton btnLineamientos = new JButton("Lineamientos de classroom");
        btnLineamientos.addActionListener(e -> textArea.setText(materia.lineamientosClassroom()));
        panel.add(btnLineamientos);

        JButton btnFechasDeParcial = new JButton("Fechas de los parciales");
        btnFechasDeParcial.addActionListener(e -> textArea.setText(materia.fechasDeParciales()));
        panel.add(btnFechasDeParcial);

        JButton btnPorcentajes = new JButton("Porcentajes por parcial");
        btnPorcentajes.addActionListener(e -> textArea.setText(materia.porcentajesPorParcial()));
        panel.add(btnPorcentajes);

        ventana.add(panel, BorderLayout.NORTH);
        ventana.setVisible(true);
    }
}
